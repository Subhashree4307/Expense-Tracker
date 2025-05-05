import {react} from "react";
import { useContext } from "react";
import{
    List as MUIList,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Slide
} from "@mui/material";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransactionContext } from "../../../context/transactioncontext";
const List = () => {
    const classes = useStyles();
    const {transactions, deleteTransaction} = useContext(TransactionContext);
    return(
        <MUIList dense={false} className={classes.list}>
{transactions.map((transaction)=>{
    return(
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={transaction.type === 'Expense' ? classes.avatarExpense : classes.avatarIncome}>
                        <MoneyOffIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`$${transaction.amount}`}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Slide>
    )
})}
        </MUIList>
    )

}
export default List;
