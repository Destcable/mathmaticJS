function matrixSummation(a, b) { 
    if ( ( a && b ) && ( a.length === b.length) ) {
        let test = [];
        for (let i = 0; i < a.length; i++) {
            test.push(a[0][i] + b[0][i])
        }
        console.log(test)
    }
}

module.exports.matrixSummation = matrixSummation;