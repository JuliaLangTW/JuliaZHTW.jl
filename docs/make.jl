using Documenter


# manual/unicode-input.md
download("http://www.unicode.org/Public/9.0.0/ucd/UnicodeData.txt", joinpath(@__DIR__, "UnicodeData.txt"))

makedocs(
    clean = true,
    doctest = false, # TODO: Fix doctest
    sitename="Julia Taiwan 中文文件",
    pages = [
        "首頁" => "index.md",
        "手冊" => [
            "manual/getting-started.md",
            "manual/variables.md",
            "manual/integers-and-floating-point-numbers.md",
            "manual/mathematical-operations.md",
            "manual/complex-and-rational-numbers.md",
            "manual/strings.md",
            "manual/functions.md",
            "manual/control-flow.md",
            "manual/variables-and-scoping.md",
            "manual/types.md",
            "manual/methods.md",
            "manual/constructors.md",
            "manual/conversion-and-promotion.md",
            "manual/interfaces.md",
            "manual/modules.md",
            "manual/documentation.md",
            "manual/metaprogramming.md",
            "manual/arrays.md",
            "manual/missing.md",
            "manual/networking-and-streams.md",
            "manual/parallel-computing.md",
            "manual/running-external-programs.md",
            "manual/calling-c-and-fortran-code.md",
            "manual/handling-operating-system-variation.md",
            "manual/environment-variables.md",
            "manual/embedding.md",
            "manual/code-loading.md",
            "manual/profile.md",
            "manual/stacktraces.md",
            "manual/performance-tips.md",
            "manual/workflow-tips.md",
            "manual/style-guide.md",
            "manual/faq.md",
            "manual/noteworthy-differences.md",
            "manual/unicode-input.md",
        ],
        "Base" => [
        ],
        "標準程式庫" => [
        ],
        "開發者手冊" => [
        ],
    ],
    Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical = "https://julialangtw.github.io/JuliaZHTW.jl/latest/",
    ),
    assets = ["assets/favicon.ico"],
)

if "deploy" in ARGS
deploydocs(
    repo = "github.com/JuliaLangTW/JuliaZHTW.jl.git",
)
end
