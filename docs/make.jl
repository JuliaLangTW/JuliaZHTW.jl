push!(LOAD_PATH,"../src/")
using Documenter

makedocs(
    clean     = true,
    sitename="Julia Taiwan 中文文件",
    pages = [
        "首頁" => "index.md",
        "概論 (Introduction)" => "introduction.md",
    ],
    Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical = "https://julialangtw.github.io/JuliaZHTW.jl/latest/",
    )
)

deploydocs(
    repo = "github.com/JuliaLangTW/JuliaZHTW.jl.git",
)
