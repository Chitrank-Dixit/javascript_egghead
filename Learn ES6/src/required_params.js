console.clear();

function ajax({
    type = "get",
    url = requiredParameter("url"),
    data = {},
    success = requiredParameter("success"),
    error = () => {},
    isAsync = true } = {}) {
    console.log(JSON.stringify({ type, url, data, success, error, isAsync }, null, 2));
}

function requiredParameter(name) {
    throw new Error(`Missing parameter "${name}"`);
}