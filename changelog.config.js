module.exports = {
  disableEmoji: false,
  format: "{emoji}{type}: {scope} - {subject}",
  list: ["feat", "refactor", "chore", "fix", "style", "test", "docs"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "scope", "subject", "body"],
  scopes: ["FE", "BE", "COMMON"],
  types: {
    chore: {
      description: "빌드 업무 수정, 패키지 매니저 수정, 기타 잡무",
      emoji: "🤖",
      value: "chore",
    },
    style: {
      description: "코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우",
      emoji: "💄",
      value: "style",
    },
    docs: {
      description: "문서 작성",
      emoji: "✏️",
      value: "docs",
    },
    feat: {
      description: "새로운 기능 추가",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "버그 수정",
      emoji: "🐛",
      value: "fix",
    },
    refactor: {
      description: "코드 리팩토링",
      emoji: "💡",
      value: "refactor",
    },
    test: {
      description: "테스트 코드, 리팩토링 테스트 코드 추가",
      emoji: "💍",
      value: "test",
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: "Select the scope this component affects:",
      subject: "Write a short, imperative mood description of the change:\n",
      body: "Provide a longer description of the change:\n ",
      breaking: "List any breaking changes:\n",
      footer: "Issues this commit closes, e.g #123:",
      confirmCommit: "The packages that this commit has affected\n",
    },
  },
};
