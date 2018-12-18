using Documenter

makedocs(
    clean = true,
    doctest = false, # TODO: Fix doctest
    sitename="Julia Taiwan 中文文件",
    pages = [
        "首頁" => "index.md",
        "手冊" => [
            "入門 (Getting Started)" => "manual/getting-started.md",
            "變數 (Variables)" => "manual/variables.md",
            "效能建議 (Performance Tips)" => "manual/performance-tips.md",
            "程式風格指引 (Style Guide)" => "manual/style-guide.md",
        ],
    ],
    Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical = "https://julialangtw.github.io/JuliaZHTW.jl/latest/",
    ),
    assets = ["assets/favicon.ico"],
)

deploydocs(
    repo = "github.com/JuliaLangTW/JuliaZHTW.jl.git",
)
