// Import necessary libraries
import { useEffect, useMemo, useState } from 'react';
import TableContainer from '../components/TableContainer.jsx';

const ProductList = () => {

    const apiUrl = 'https://s3.amazonaws.com/open-to-cors/assignment.json';
    const [memoizedData, setMemoizedData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setMemoizedData(data?.products);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const allData = useMemo(() => {
        if (!memoizedData || Object.keys(memoizedData).length === 0) {
            return []; // Return an empty array or some default value if memoizedData is empty
        }
        const arrayOfObjects = Object.values(memoizedData);

        return arrayOfObjects.sort((a, b) => parseInt(b.popularity, 10) - parseInt(a.popularity, 10));
    }, [])
    const columns = useMemo(() => [
        {
            Header: "Sub Category",
            accessor: "subcategory",
            Cell: cellProps => {
                return cellProps.value;
            },
        },
        {
            Header: "Title",
            accessor: "title",
            Cell: cellProps => {
                return cellProps.value;
            },
        },
        {
            Header: "Price",
            accessor: "price",
            Cell: cellProps => {
                return cellProps.value;
            },
        },
        {
            Header: "Popularity",
            accessor: "popularity",
            Cell: cellProps => {
                return cellProps.value;
            },
        },
    ], [allData]);

    return (
        <div>
            <h1>Product List</h1>
            <TableContainer
                data={allData || []}
                columns={columns}
            />
        </div>
    )
}

export default ProductList;