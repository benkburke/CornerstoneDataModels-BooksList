export default class HttpGateway {
  get = async (path) => {
    const response = await fetch(path);
    const booksDto = response.json();

    return booksDto;
  };
}
