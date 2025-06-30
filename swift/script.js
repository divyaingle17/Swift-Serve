const bookings = [
    { id: '#1001', name: 'John Doe', service: 'Plumbing', date: '2025-06-15', status: 'pending' },
    { id: '#1002', name: 'Alice', service: 'Cleaning', date: '2025-06-16', status: 'completed' },
    { id: '#1003', name: 'Mike', service: 'Electrician', date: '2025-06-17', status: 'rejected' }
  ];
  
  function renderTable() {
    const table = document.getElementById('bookingTable');
    table.innerHTML = '';
    bookings.forEach((b, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${b.id}</td>
        <td>${b.name}</td>
        <td>${b.service}</td>
        <td>${b.date}</td>
        <td class="status ${b.status}">${b.status}</td>
        <td>
          <select onchange="changeStatus(${i}, this.value)">
            <option value="pending" ${b.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="completed" ${b.status === 'completed' ? 'selected' : ''}>Completed</option>
            <option value="rejected" ${b.status === 'rejected' ? 'selected' : ''}>Rejected</option>
          </select>
        </td>
      `;
      table.appendChild(row);
    });
  }
  
  function changeStatus(index, newStatus) {
    bookings[index].status = newStatus;
    renderTable();
  }
  
  window.onload = renderTable;
  