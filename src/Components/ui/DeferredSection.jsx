import React, { Suspense, useEffect, useRef, useState } from 'react'

const SectionPlaceholder = ({ id }) => (
  <section id={id} className="deferred-section" aria-hidden="true">
    <div className="container deferred-section__shell">
      <span />
      <span />
      <span />
    </div>
  </section>
)

const DeferredSection = ({ id, children }) => {
  const [shouldRender, setShouldRender] = useState(false)
  const placeholderRef = useRef(null)

  useEffect(() => {
    const node = placeholderRef.current

    if (!node || shouldRender) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '500px 0px', threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldRender])

  if (shouldRender) {
    return <Suspense fallback={<SectionPlaceholder id={id} />}>{children}</Suspense>
  }

  return (
    <div ref={placeholderRef}>
      <SectionPlaceholder id={id} />
    </div>
  )
}

export default DeferredSection
