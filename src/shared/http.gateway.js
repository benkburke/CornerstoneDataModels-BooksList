export default class HttpGateway {
  get = async (path) => {
    const response = await fetch(path);
    const booksDto = response.json();

    return booksDto;
  };

  post = async (path, body) => {
    console.log("data", JSON.stringify(body));
    await fetch(path, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };
}
