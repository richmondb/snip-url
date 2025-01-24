export function validateUrlString(url: string): boolean {

  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol (http or https, optional)
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+" + // validate domain name (e.g., www.example.com)
      "[a-z]{2,}|" + // validate top-level domain (e.g., .com, .net)
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate IP address (IPv4)
      "(\\:\\d+)?" + // validate optional port (e.g., :8080)
      "(\\/[-a-z\\d%_.~+]*)*" + // validate path (e.g., /path/to/resource)
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string (e.g., ?param=value)
      "(\\#[-a-z\\d_]*)?$",
    "i" // validate fragment locator (e.g., #section)
  );

    return urlPattern.test(url); // return true if the URL is valid
}
