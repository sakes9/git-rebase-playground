module.exports = {
    types: [
      {
        value: '✨ feat',
        name: 'feat:      新機能の追加'
      },
      {
        value: '🩹 fix',
        name: 'fix:       不具合の修正'
      },
      {
        value: '💡 bulb',
        name: 'bulb:      コメントの追記'
      },
      {
        value: '♻️ refactor',
        name: 'refactor:  リファクタリング'
      },
      {
        value: '🔧 chore',
        name: 'chore:     雑事（カテゴライズ不要のもの）'
      }
    ],
    messages: {
      type: "コミットする変更タイプを選択してください:\n",
      subject: "コミット内容について入力してください:\n",
      body: "コミット内容の詳細について入力してください:（enterでスキップ）\n",
      confirmCommit: "上記のコミットを続行してもよろしいですか?(Y/n)\n"
    },
    skipQuestions: ["scope", "breaking", "footer"],
  };