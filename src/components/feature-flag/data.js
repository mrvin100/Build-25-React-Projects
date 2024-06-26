const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeview: false,
};
const FeatureFlagsDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(resolve(dummyApiResponse), 500);
    } else {
      reject("Some error accured! Please try again");
    }
  });
};

export default FeatureFlagsDataServiceCall;
