const findCombinationsFromText = require("./solution");
const expectedResults = [
  [
    [
      "Group_Electric-Pallet-Jack-Parts",
      "Category_Switches",
      "Subcategory_Ignition-Switch",
    ],
    ["Group_Electric-Pallet-Jack-Parts", "Category_Switches"],
    ["Group_Electric-Pallet-Jack-Parts"],
  ],
  [
    [
      "Group_Electric-Pallet-Jack-Parts",
      "Category_Switches",
      "Subcategory_Ignition-Switch",
    ],
    ["Group_Electric-Pallet-Jack-Parts", "Category_Switches"],
    ["Group_Electric-Pallet-Jack-Parts"],
  ],
  [
    [
      "Group_Electric-Pallet-Jack-Parts",
      "Category_Switches",
      "Subcategory_Ignition-Switch",
    ],
    ["Group_Electric-Pallet-Jack-Parts", "Category_Switches"],
    ["Group_Electric-Pallet-Jack-Parts"],
  ],
  [
    ["Group_Tools-Hardware", "Category_Roll-Pin", "Make_Atlas"],
    ["Group_Tools-Hardware", "Category_Roll-Pin"],
    ["Group_Tools-Hardware"],
  ],
  [],
  [],
  [
    [
      "Group_Tools-Hardware",
      "Category_Roll-Pin",
      "Make_U-LineModel_H-1193",
      "Model_H-1193",
    ],
    ["Group_Tools-Hardware", "Category_Roll-Pin", "Make_U-LineModel_H-1193"],
    ["Group_Tools-Hardware", "Category_Roll-Pin"],
    ["Group_Tools-Hardware"],
  ],
  [
    [
      "Group_Tools-Hardware",
      "Category_Roll-Pin",
      "Make_MultitonModel_J",
      "Model_J",
    ],
    ["Group_Tools-Hardware", "Category_Roll-Pin", "Make_MultitonModel_J"],
    ["Group_Tools-Hardware", "Category_Roll-Pin"],
    ["Group_Tools-Hardware"],
  ],
  [
    [
      "Group_Tools-Hardware",
      "Category_Roll-Pin",
      "Make_MultitonModel_J",
      "Model_J",
    ],
    ["Group_Tools-Hardware", "Category_Roll-Pin", "Make_MultitonModel_J"],
    ["Group_Tools-Hardware", "Category_Roll-Pin"],
    ["Group_Tools-Hardware"],
  ],
  [["Group_Tools-Hardware"]],
];
describe("find Combinations From Text function Test", () => {
  test("reguler case test 1", () => {
    let actual = findCombinationsFromText(
      "Group_Electric-Pallet-Jack-Parts, Category_Switches,Subcategory_Ignition-Switch"
    );
    expect(actual).toEqual(expectedResults[0]);
  });

  test("sepreated by key words test 2", () => {
    let actual = findCombinationsFromText(
      "--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!!Subcategory_Ignition-Switch))@!%"
    );
    expect(actual).toEqual(expectedResults[1]);
  });
  test("Combinations needs to sort by the valid prifex level 3", () => {
    let actual = findCombinationsFromText(
      "Category_Switches-Group_Electric-Pallet-Jack-PartsSubcategory_Ignition-Switch"
    );
    expect(actual).toEqual(expectedResults[2]);
  });
  test("Make should always come after Subcategory, but if the Subcategory does not exist, Make comes after the Category test 4", () => {
    let actual = findCombinationsFromText(
      "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas"
    );
    expect(actual).toEqual(expectedResults[3]);
  });
  test("Invalid Combinations threason that there is tow Groups test 5", () => {
    let actual = findCombinationsFromText(
      "Group_Tools-Hardware-Category_Roll-Pin-Make_AtlasGroup_Test"
    );
    expect(actual).toEqual(expectedResults[4]);
  });
  test("Invalid Combinations Invalid Tag test 6", () => {
    let actual = findCombinationsFromText(
      "Group_Tools-Hardware-Category_Roll-Pin-Make_AtlasWrongPrefix_Test"
    );
    expect(actual).toEqual(expectedResults[5]);
  });
  test("Invalid Combinations threason that there is tow Groups test 7", () => {
    let actual = findCombinationsFromText(
      "Group_Tools-Hardware-Category_Roll-Pin-Make_U-LineModel_H-1193"
    );
    expect(actual).toEqual(expectedResults[6]);
  });
  test("Regular Combinations Case test test 8", () => {
    let actual = findCombinationsFromText(
      "Group_Tools-Hardware-Category_Roll-Pin-Make_MultitonModel_J"
    );
    expect(actual).toEqual(expectedResults[7]);
  });
  test("Regular Combinations Case test 9", () => {
    let actual = findCombinationsFromText(
      "Group_Tools-Hardware-Category_Roll-Pin-Make_MultitonModel_J"
    );
    expect(actual).toEqual(expectedResults[8]);
  });
  test("Regular Combinations Case test 10", () => {
    let actual = findCombinationsFromText("Group_Tools-&-Hardware");
    expect(actual).toEqual(expectedResults[9]);
  });
});
