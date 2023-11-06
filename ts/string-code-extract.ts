export type CodeMessage = {
  language: string;
  code: string;
};

function removeCode(str: string) {
  let i = 0;
  const regexToRmCode = /```[\s\S]*?```/g;
  return str.replace(regexToRmCode, `some-code`).split("some-code");
}

function getCodesFromString(str: string) {
  const regexToRmContent = /```(\w+)\n([\s\S]+?)```/g;
  let match;
  const codes: CodeMessage[] = [];
  while ((match = regexToRmContent.exec(str)) !== null) {
    const language = match[1];
    const code = match[2];
    codes.push({
      language,
      code,
    });
  }
  return codes;
}

export function parseCode(str: string) {
  return {
    withoutCodeArr: removeCode(str),
    codesArr: getCodesFromString(str),
  };
}
