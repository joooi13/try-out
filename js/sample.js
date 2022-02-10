function checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res
    } else {
        const error = new Error(res.statusText);
        error.response = res;
        throw error
    }
}

function parseXML(response) {
    return response.text().then((stringContainingXMLSource) => {
        const parser = new DOMParser();
        return parser.parseFromString(stringContainingXMLSource, "text/xml");
    })
};

fetch("http://zip.cgis.biz/xml/zip.php?zn=0600000",{mode: 'cors'})
.then(checkStatus).then(parseXML).catch((error) => {
    console.log('request failed', error)});
