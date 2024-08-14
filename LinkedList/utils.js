const executionTime = async (handle) => {
    let start = new Date().getTime();

    await handle();

    let end = new Date().getTime();
    let time = end - start;

    console.log('Execution time StackArray.push: ' + time);
}

module.exports = executionTime;