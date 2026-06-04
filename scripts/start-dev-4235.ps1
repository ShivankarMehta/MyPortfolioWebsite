$ErrorActionPreference = "Stop"

$env:PORT = "4235"
$env:BROWSER = "none"

$node = "C:\Users\Shivanker\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$script = Join-Path (Resolve-Path ".") "node_modules\react-scripts\scripts\start.js"

& $node $script
