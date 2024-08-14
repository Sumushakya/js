const a = [
  { name: "ram", age: 20 },
  { name: "shyam", age: 14 },
];
{
  {
    a.map((x) => (
      <>
        <p style={{ color: "red" }}>{x.name}</p>
        <p style={{ color: "red" }}>{x.age}</p>
      </>
    ));
  }
}
