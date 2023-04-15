# [QkAnim](https://qkanim.com)

`QkAnim.js`は、クラス名を利用して簡単にアニメーションを追加するJavaScriptライブラリです。

## 使用方法

1. `QkAnim.js`を`HTML`ファイルに読み込みます。

### ダウンロード版を利用する場合

[QkAnim公式サイト](https://qkanim.com)よりダウンロードしてください。

### HTML

```html
<script src="path/qkanim.min.js"></script>
```
### CDN版を利用する場合

### HTML

```html
<script src="https://cdn.jsdelivr.net/npm/qkanim@1.2.0/dist/qkanim.min.js"></script>
```

2. `HTML`要素にアニメーション用のクラス名を設定します。例えば、画像を上からスライドインするアニメーションを設定する場合は、以下のように`qk`クラスで画像要素を囲い、`qk-slide-top`クラスを追加します。

### HTML

```html
<div class="qk">
    <img src="image.png" class="qk-slide-top">
</div>
```

3. ページを読み込むと、画面内に要素が入ると設定したアニメーションが実行されます。また、アニメーションの設定は`CSS`で行うため、簡単にカスタマイズすることができます。また、下記のように`qk`クラスの下に複数の`qk`アニメーションクラスを入れることができます。

### HTML

```html
<div class="qk">
    <img src="image.png" class="qk-slide-top">
    <img src="image.png" class="qk-slide-top">
    <img src="image.png" class="qk-slide-top">
</div>
```

## Qkクラス一覧

`QkAnim.js`は、以下のクラス名をサポートしています。

- `qk`
- `qk-once`
- `qk-fade-in`
- `qk-fade-out`
- `qk-slide-top`
- `qk-slide-bottom`
- `qk-slide-left`
- `qk-slide-right`
- `qk-mask-top`
- `qk-mask-bottom`
- `qk-mask-left`
- `qk-mask-right`

## サポートアニメーション

`QkAnim.js`は、以下のアニメーションをサポートしています。


| クラス名         | 操作するCSSプロパティ |
| ------------ | ------------ |
| `qk-fade-*`  | `opacity`    |
| `qk-slide-*` | `translate`  |
| `qk-mask-*`  | `clip-path`  |

## `qk-once`クラスについて

画面内に入ったら一回のみアニメーションを実行したい場合は、`qk-once`クラスを使用してください。

例：画面内に入ったら一回のみ画像をフェードインさせたい場合

### HTML

```HTML
<div class="qk-once">
    <img src="image1.jpeg" class="qk-fade-in">
</div>
```

## Qkリストクラス一覧

`QkAnim.js`は、以下のリストアニメーションをサポートしています。

`ul`、`ol`タグのクラスをご使用してください。

また、画面外では、処理の軽量化のためアニメーションを停止します。

- `qk-list`
- `qk-list-fade`
- `qk-list-slide`
- `qk-list-slide-fade`
- `qk-list-mask`
- `qk-list-mask-fade`

例：画像をフェードで切り替えるリストアニメーション

### HTML

```html
<ul class="qk-list-fade">
    <li><img src="image1" alt=""></li>
    <li><img src="image2" alt=""></li>
    <li><img src="image3" alt=""></li>
    <li><img src="image4" alt=""></li>
</ul>
```

## カスタマイズ
アニメーションの動きやタイミングをカスタマイズする場合は、CSSで設定します。例えば、以下のように`--qk-fade-dur`を変更することで、フェードアニメーションの時間を変更することができます。

### CSS

```css
.qk-fade-in {
    --qk-fade-dur: 2s;
}
```

## オプション

| オプション名 | 説明 | デフォルト値 |
| --- | --- | --- |
| `--qk-fade-dur` | フェードアニメーション秒数 | 1s |
| `--qk-fade-opac` | フェードアニメーション後の透明度 | 1 |
| `--qk-slide-dur` | スライドアニメーション秒数 | 1s |
| `--qk-slide-x` | 左右からスライドする量 | 30px |
| `--qk-slide-y` | 上下からスライドする量 | 30px |
| `--qk-mask-dur` | マスクアニメーション秒数 | 1s |
| `--qk-list-dur` | リストアニメーション秒数 | 3s |

# 実装予定機能
- [ ] リソースのダウンロード進捗状況付きのロード画面
- [ ] スライドショー機能

## ライセンス
「QkAnim.js」は、MITライセンスの下で提供されています。詳細については、[LICENSE](./LICENSE)ファイルを参照してください。

## お問い合わせ
何か問題がある場合や、機能のリクエストがある場合は、[issues](https://github.com/skwk111/qkanim/issues)まで。