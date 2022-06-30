import _ from "lodash";
import flagsData from "../assets/dummies/flags.json";

export default {
  methods: {
    formatNumbers: function(number) {
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    sumValues: function(data, sumKey) {
      if (data && data.length) {
        const summed = _.sumBy(data, sumKey);
        return this.formatNumbers(summed);
      }
    },
    amountParser: function(amount) {
      return parseInt(amount.replace('$', '').replaceAll(',', ''));
    },
    percentageFinder: function(partialValue, totalValue) {
      const percentage = (100 * this.amountParser(partialValue)) / this.amountParser(totalValue);
      return percentage.toFixed(0);
    },
    mergeArrays: function(firstArray, secondArray, firstKey, secondKey) {
      const results = firstArray.map((firstArrayObject) => ({
        ...secondArray.find(
          (secondArrayObject) =>
            firstArrayObject[firstKey] === secondArrayObject[secondKey] &&
            secondArrayObject
        ),
        ...firstArrayObject,
      }));
      return results;
    },

    groupObjects: function(data, groupingkey) {
      const groupedData = data.reduce((acc, value) => {
        if (!acc[value[groupingkey]]) {
          acc[value[groupingkey]] = [];
        }
        // Grouping
        acc[value[groupingkey]].push(value);
        return acc;
      }, {});

      return Object.entries(groupedData);
    },
    showFlag: function(countryName) {
      const country = _.find(flagsData, { name: countryName });
      if (country) {
        return country.image;
      } else {
        return "";
      }
    },
  },
};
