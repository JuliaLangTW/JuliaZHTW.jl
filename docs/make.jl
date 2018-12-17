using Documenter

makedocs(
    clean = true,
    doctest = false, # TODO: Fix doctest
    sitename="Julia Taiwan 中文文件",
    pages = [
        "首頁" => "index.md",
        "手冊" => [
            "入門 (Getting Started)" => "mannual/getting-started.md",
            "變數 (Variables)" => "mannual/variables.md",
        ],
    ],
    Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical = "https://julialangtw.github.io/JuliaZHTW.jl/latest/",
    )
)

deploydocs(
    repo = "github.com/JuliaLangTW/JuliaZHTW.jl.git",
)
