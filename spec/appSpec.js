describe('app server', function () {
  const baseUrl = 'http://localhost:3000'
  const shouldBeValid = async function (route) {
    it('should return between 200 and 399, inclusive', async function () {
      const url = new URL(route, baseUrl)
      const res = await fetch(url)
      expect(res.status >= 200 && res.status <= 399).toBeTruthy
    }, 10000)
  }

  describe("GET '/health'", function () {
  shouldBeValid('/health')
  })

  describe("GET '/'", function () {
    shouldBeValid('/')
  } )
})
