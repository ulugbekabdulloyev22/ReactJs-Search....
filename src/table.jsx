function Table({ data }) {
  return (
    <div className="table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((data) => (
            <tr key={data.id}>
              <td>
                <img src={data.img} alt={data.first_name} />
              </td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
      </tbody>
    </div>
  );
}

export default Table;
