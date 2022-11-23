import { createNode, createNode2dArray } from "../src/formatter";

//const initialFile = require("../InitialFile');

test("initialFile check", () => {
  let node = createNode(0, 1, undefined);
  console.log(node);
  expect(node).toStrictEqual({ rowNum: 0, type: "blank", parent: 1 });
});

test("createNode2dArray func test", () => {
  const inputData = [
    {
      id: "a",
      qna_id: 1,
      prompts: [
        {
          qna_id: 2,
          display_text: "text2",
          display_orider: 1,
          metadata: { is_searchable: true }
        },
        {
          qna_id: 3,
          display_text: "text3",
          display_orider: 2,
          metadata: { is_searchable: true }
        }
      ],
      answer: "answer1",
      questions: "questions1",
      metadata: { is_searchable: true }
    },
    {
      id: "b",
      qna_id: 2,
      prompts: [
        {
          qna_id: 4,
          display_text: "text4",
          display_orider: 1,
          metadata: { is_searchable: true }
        }
      ],
      answer: "answer2",
      questions: "questions2",
      metadata: { is_searchable: true }
    },
    {
      id: "c",
      qna_id: 4,
      prompts: [],
      answer: "answer4",
      questions: "questions4",
      metadata: { is_searchable: true }
    }
  ];
  const node2dArray = createNode2dArray({
    data: inputData,
    node2Array: [[]],
    qna_id: 1,
    parent: -1,
    rowNum: 0
  });
  console.log(node2dArray);
});
