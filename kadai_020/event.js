//ボタンオブジェクトの取得
const btn = document.getElementById('btn');
//テキストオブジェクトの取得
const text = document.getElementById('text');

//ボタンクリックイベント
btn.addEventListener('click', () => {
  //テキストの変換
  text.textContent = 'ボタンをクリックしました';
});