export const Dashboard = () => {
  return (
    <div>
    <h1>Hello World</h1>
      <form>
      <input type="hidden" defaultValue={process.env.REACT_APP_NASA_API_KEY} />
      </form>
    </div>
  )
}