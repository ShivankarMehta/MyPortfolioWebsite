const LEETCODE_GRAPHQL_ENDPOINT = 'https://leetcode.com/graphql/'

const profileQuery = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        ranking
        userAvatar
        reputation
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`

exports.handler = async (event) => {
  const username = event.queryStringParameters?.username

  if (!username) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing username' })
    }
  }

  try {
    const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: `https://leetcode.com/u/${username}/`,
        'User-Agent': 'Mozilla/5.0 portfolio-leetcode-profile'
      },
      body: JSON.stringify({
        query: profileQuery,
        variables: { username },
        operationName: 'userPublicProfile'
      })
    })

    const payload = await response.json()
    const user = payload?.data?.matchedUser

    if (!response.ok || !user) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'LeetCode profile not found', details: payload.errors || [] })
      }
    }

    const accepted = user.submitStatsGlobal?.acSubmissionNum || []
    const countByDifficulty = accepted.reduce((accumulator, item) => {
      accumulator[item.difficulty.toLowerCase()] = item.count
      return accumulator
    }, {})

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800'
      },
      body: JSON.stringify({
        username: user.username,
        realName: user.profile?.realName,
        avatar: user.profile?.userAvatar,
        ranking: user.profile?.ranking,
        reputation: user.profile?.reputation,
        solved: {
          total: countByDifficulty.all || 0,
          easy: countByDifficulty.easy || 0,
          medium: countByDifficulty.medium || 0,
          hard: countByDifficulty.hard || 0
        }
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Unable to fetch LeetCode profile' })
    }
  }
}
