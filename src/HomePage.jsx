
function HomePage({name})
{
        return (
            <div>
                 <h1>Hello, {name || "World"}!</h1>;
            </div>
        )

}
export default HomePage;