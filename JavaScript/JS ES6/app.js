const obj = {
    name: 'A',
    cat: {
        name: 'A1',
        cat2: {
            name: 'A2'
        }
    }
};

// -> optional chaining -> cat2 co ton tai hay khong
if (obj.cat?.cat2) {
    console.log(obj.cat.cat2.name);
}