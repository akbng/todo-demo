import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-5 row">
        <div className="col-md-8 mx-auto">
          <form>
            <input
              class="form-control form-control-lg mb-2"
              type="text"
              placeholder="Write your todo"
              required
            />
            <textarea
              class="form-control mb-2"
              placeholder="Write any details about the todo (OPTIONAL)"
              rows="2"
            />
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 mx-auto">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <button className="btn">X</button>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <button className="btn">X</button>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <button className="btn">X</button>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <button className="btn">X</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
