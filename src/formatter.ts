export interface Data {
  id: string;
  qna_id: number;
  answer: string;
  questions: string;
  prompts: {
    qna_id: number;
    display_text: string;
    display_order?: number;
    metadata?: { [key: string]: any };
  };
}

export interface Node {
  type: string | "blank" | "qna";
  display_text?: string;
  display_order?: string;
  answer?: string;
  questions?: string;
  parent?: number;
  [key: string]: any;
}

export const findByQnaId = (data: Data[], qnaId: number): undefined | Data => {
  return data.find((d) => d["qna_id"] === qnaId);
};

export const createNode = (
  rowNum: number,
  parent: number,
  data?: Data
): Node => {
  if (data) {
    return { rowNum: rowNum, type: "qna", parent: parent, ...data };
  } else {
    return { rowNum: rowNum, type: "blank", parent: parent };
  }
};

export const insertNode = (
  node2dArr: Node[][],
  rowNum: number,
  colNum: number,
  parent: number,
  data?: Data
): Node[][] => {
  const nodeData = createNode(rowNum, parent, data);
  if (!node2dArr[colNum]) {
    node2dArr[colNum].push(nodeData);
  }
  return node2dArr;
};

export const createNode2dArr = (
  data: Data[],
  node2dArr: Node[][],
  qnaId: number,
  rowNum: number,
  colNum: number,
  parent?: number
): Node[][] => {
  const searched = findByQnaId(data, qnaId);
  if (searched) {
    if (Array.isArray(searched?.prompts) && searched.prompts.length > 0) {
      node2dArr = insertNode(
        node2dArr,
        rowNum,
        colNum,
        parent ?? searched.qna_id,
        searched
      );

      searched.prompts.forEach((prompt, index) => {
        node2dArr = createNode2dArr(
          data,
          node2dArr,
          prompt["qna_id"],
          rowNum + index,
          colNum + 1,
          searched.qna_id
        );
      });
    } else {
      node2dArr = insertNode(node2dArr, rowNum, colNum, parent ?? -1, searched);
    }
    return node2dArr;
  } else {
    throw new Error("qnaIdに対応するデータが存在しません。");
  }
};
