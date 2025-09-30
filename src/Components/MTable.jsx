import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';




let USERS = [], STATUSES = ['Active','Pending','Blocked'];
for(let i=0;i<14;i++){
  USERS[i]={
    name: "SAIFUL SAHRI HADIRI PELANTIKAN PEJABAT PEMASYARAKATAN: BUKTI NYATA SINERGITAS",
    email:"dsa",
    phone:"dsa",
    jobTitle:"dsa",
    company:"dsa",
    joinDate:"dsa",
    status:"dsa",
    status: STATUSES[Math.floor(Math.random()*STATUSES.length)]
  }
}


const MTable = () => {

const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <TableContainer component={Paper} style={{margin:"100px 100px",maxWidth:950,tableLayout:"fixed",overflowX:"auto",display:"block"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead style={{fontWeight:"bold", color:"yellow"}}>
          <TableRow >
            
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Judul</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Tanggal</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Website</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Instagram</Typography></TableCell>
            <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>X / Twitter</Typography></TableCell>
          <TableCell ><Typography color='yellow' fontWeight={"bold"} textAlign={"center"}>Kompasiana</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                <Typography fontWeight={"bold"}>{row.name}</Typography>
              </TableCell>

              <TableCell >
                {row.jobTitle}
              </TableCell>

              <TableCell>{row.joinDate}</TableCell>
              
              <TableCell><Typography fontWeight={"bold"} fontSize={"0.75rem"} color={'white'} 
                style={{
                    backgroundColor:
                    ((row.status === "Active" && "green")||
                    (row.status === "Pending" && "blue") ||
                    (row.status === "Blocked" && "orange")
                )
                }} 
              borderRadius={8} padding={"3px 10px"} display={"inline-block"}>{row.status}</Typography></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        
        <TableFooter >
            
            <div>count={USERS.length}</div>
        <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={USERS.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </TableFooter>
      </Table>
    </TableContainer>
    </div>
  );
}

export default MTable