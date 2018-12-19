# Julia 台灣社群 中文文件

[原翻譯文件(hackmd)](https://hackmd.io/c/r106dSpkb)

## 搬運說明

1. 將 hackmd 中的 markdown 原始碼複製，並在 `docs/src/manual/` 中建立對應的 `.md` 檔
2. 在 `docs/make.jl` 中新增目錄以及對應的 `.md` 檔
3. Commit 並 Push

## 文件間參考

可以參考 [docs/src/index.md](docs/src/index.md) 中 `@ref` [docs/src/manual/performance-tips.md](docs/src/manual/performance-tips.md) 的方式

需要在被參考的文件中加入 `@id <ref-name>` ，然後在要參考該文件的地方用 `@ref <ref-name>` 插入連結

詳細語法參考 Documenter 的 [doc](https://juliadocs.github.io/Documenter.jl/stable/man/syntax/#@ref-link-1)

## 貢獻者名單

- [Daniel Chen (陳建鳴)](https://github.com/d4n1elchen)
- [Yueh-Hua Tu (杜岳華)](https://github.com/yuehhua)

