export default function edit() {
  return (
    <div>
      <h2>Edit your Profile</h2>
      <form action="/action_page.php">
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" defaultValue="song" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" defaultValue="yang" />
        <br />
        <input type="text" id="search" placeholder="Search" />
        <br />

        <br />
        <div>
          <a href="#" className="btn" data-filter="protography">
            protography
          </a>
          <a href="#" className="btn" data-filter="moives">
            movies
          </a>
          <a href="#" className="btn" data-filter="cat">
            cat
          </a>
          <a href="#" className="btn" data-filter="Reading">
            Reading
          </a>
        </div>

        <br />
        <br />
        <input type="button" value="cancel" />
        <input type="button" value="save" />
      </form>
    </div>
  );
}
