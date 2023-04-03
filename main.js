const data = [
  {S_No:1, email: 'mary@gmail.com', role: 'Secretary',createdBy: 'mike@gmail.com',
  createdDate: '2022-01-01',modifiedBy: 'admin1',modifiedDate: '2022-01-02'},

  {S_No: 2, email: 'golden@ahoo.com', role: 'Receptionist', createdBy: 'duke@wix.com',
   createdDate: '2022-01-02', modifiedBy: 'admin2', modifiedDate: '2022-01-03'},
  
  {S_No: 3, email: 'forit@masters.com', role: 'Cleaner', createdBy: 'walt@mainstay.com',
   createdDate: '2022-01-03', modifiedBy: 'admin3', modifiedDate: '2022-01-04'},
  
  {S_No: 4, email: 'merry@onebox.com', role: 'Gardener', createdBy: 'mushroom@wabe.com', 
   createdDate: '2022-01-04', modifiedBy: 'admin4', modifiedDate: '2022-01-05'},

  {S_No: 5, email: 'user@exampe.com', role: 'Contractor', createdBy: 'felix@oneday.com',
   createdDate: '2022-01-05', modifiedBy: 'admin5', modifiedDate: '2022-01-06'},

  {S_No: 6, email: 'demma@noon.com', role: 'Driver', createdBy: 'goter@excel.com',
   createdDate: '2022-01-06', modifiedBy: 'admin6', modifiedDate: '2022-01-07'},

  {S_No: 7, email: 'youwin@besbet.com', role: 'Manager', createdBy: 'aguy@manex.com',
   createdDate: '2022-01-07', modifiedBy: 'admin7',modifiedDate: '2022-01-08'},

  {S_No: 8, email: 'homer@yahoo.com', role: 'Administrator', createdBy: 'forher@google.com',
   createdDate: '2022-01-08', modifiedBy: 'admin8', modifiedDate: '2022-01-09'},

  {S_No: 9, email: 'mayor@time.com', role: 'Interviewer', createdBy: 'minty@facebook.com',
   createdDate: '2022-01-09', modifiedBy: 'admin9', modifiedDate: '2022-01-10'},

  {S_No: 10, email: 'foreal@dropbox.com', role: 'moderator', createdBy: 'joy@helpful.com',
   createdDate: '2022-01-10', modifiedBy: 'admin10', modifiedDate: '2022-01-11'}
];

const table = document.createElement('table');
const headerRow = table.insertRow();
headerRow.innerHTML = `
  <th>Serial No</th>
  <th>Email</th>
  <th>Role</th>
  <th>Created By</th>
  <th>Created Date</th>
  <th>Modified By</th>
  <th>Modified Date</th>
`;

data.map(item => {
  const row = table.insertRow();
  row.innerHTML = 
   `<td>${item.S_No}</td>
    <td>${item.email}</td>
    <td>${item.role}</td>
    <td>${item.createdBy}</td>
    <td>${item.createdDate}</td>
    <td>${item.modifiedBy}</td>
    <td>${item.modifiedDate}</td>
  `;
  });
document.body.appendChild(table);