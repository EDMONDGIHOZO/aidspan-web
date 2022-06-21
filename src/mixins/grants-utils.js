import _ from "lodash";

export default {
    methods: {
        formatNumbers: function (number) {
            return number.toLocaleString('en-US')
        },
        sumValues: function (data, sumKey) {
            if (data && data.length) {
                const summed = _.sumBy(data, sumKey)
                return this.formatNumbers(summed)
            }
        },
        percentageFinder: function (partialValue, totalValue) {
           const percentage = 100 * parseInt(partialValue) / parseInt(totalValue)
            return (percentage.toFixed(0));
        }
    }
}
