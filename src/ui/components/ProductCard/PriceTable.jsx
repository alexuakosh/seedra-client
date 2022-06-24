/* import { Box, Button, ButtonGroup, FilledInput, FormControlLabel, Paper, Radio, TableCell } from "@mui/material";
import React from "react";
import { AutoSizer, Column, Table } from 'react-virtualized';
import { useTableStyles } from "./useTableStyles";
import clsx from 'clsx';
import { useProductPageStyles } from "./useProductPageStyles";

const MuiVirtualizedTable = (props) => {
  const tableClasses = useTableStyles();
  const headerHeight = 52;
  const rowHeight = 52;
  const { columns, onRowClick, ...tableProps } = props;

  const getRowClassName = ({ index }) => {

    return clsx(tableClasses.tableRow, tableClasses.tableRow[index], tableClasses.flexContainer, {
      [tableClasses.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, onRowClick } = props;
    return (
      <TableCell
        component="div"
        className={clsx(tableClasses.tableCell, tableClasses.flexContainer, {
          [tableClasses.noClick]: onRowClick == null,
        })}
        variant="body"
        // style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
      </TableCell>
    );
  };

  const headerRenderer = ({ label, columnIndex }) => {

    return (
      <TableCell
        component="div"
        className={clsx(tableClasses.tableCell, tableClasses.flexContainer, tableClasses.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight}
          gridStyle={{
            direction: 'inherit',
          }}
          headerHeight={headerHeight}
          className={tableClasses.table}
          {...tableProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) =>
                  headerRenderer({
                    ...headerProps,
                    columnIndex: index,
                  })
                }
                className={tableClasses.flexContainer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
}

const PriceTable = ({quantity, currentPrice, discountPrice, productAmount, setProductAmount, localPrice,  discontStart = 10}) => {
  const priceList = [...Array(quantity)].map((item, index) => {
    const price = index < discontStart ? currentPrice : discountPrice
    return {
      amount: <FormControlLabel 
        name="size" 
        control={<Radio checked={+productAmount === index + 1} onChange={(e) => {
          setProductAmount(e.target.value)
        }}
        value={index + 1} />} 
        label={index + 1 + " pack"} />,
      price: <Box>start from <Box component="span" sx={{fontWeight:"bold", fontSize:"16px"}}>{localPrice.format(price)}</Box></Box>,
    }
  });

  const productPageClasses = useProductPageStyles();

  return (
    <Paper style={{ height: 304, boxShadow: "none" }}>
      <MuiVirtualizedTable
        rowCount={priceList.length}
        rowGetter={({ index }) => priceList[index]}
        columns={[
          {
            label: <Box component="span">Size <Box component="span" sx={{fontSize:"16px"}}>{+productAmount} PACK</Box></Box>,
            dataKey: 'amount',
          },
          {
            label: (
              <ButtonGroup 
                className={productPageClasses.amountInputGroup} 
                color="primary" 
                variant="outlined" 
                aria-label="outlined primary button group"
              >
                <Button 
                  onClick={() => {
                    setProductAmount(+productAmount - 1);
                  }} 
                  variant="text"
                  disabled={productAmount <= 1}
                >
                  {"-"}
                </Button>
                <FilledInput
                  inputProps={{sx:{textAlign:"center"}}} 
                  disableUnderline="true" 
                  hiddenLabel="true" 
                  defaultValue="1"
                  value={productAmount}
                  onChange={e => setProductAmount(+e.target.value)}
                  id="product-amount" 
                  className={productPageClasses.productAmountInput} 
                />
                <Button 
                  onClick={() => {
                    setProductAmount(+productAmount + 1);
                  }} 
                  variant="text"
                  disabled={productAmount >= quantity}
                >
                  {"+"}
                </Button>
              </ButtonGroup>
            ),
            dataKey: 'price',
          },
        ]}
      />
    </Paper>
  )
}

export default PriceTable; 
*/