function calculateRuntime(func, ...args) {
    const start = performance.now();
    func(...args); // Execute the function
    const end = performance.now();
    const runtime = end - start;
    console.log(`Function '${func.name}' took ${runtime.toFixed(4)} milliseconds to execute.`);
}


module.exports = calculateRuntime;
