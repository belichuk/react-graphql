import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

interface Props {
    query: string,
    onSubmit: Function
}

function SearchForm(props: Props) {
    const {query, onSubmit} = props;
    const [searchText, setSearchText] = useState<string>(query);
    const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(searchText);
    };

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={onChangeSearchText}
                className="mr-sm-2" />
            <Button onClick={handleSubmit}>Search</Button>
        </Form>
    );
}

export default SearchForm;
