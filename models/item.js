//Item class to hold all the attributes required for this app
class Item {
    constructor(id, title, imageUri, address, latitude, longitude){
        this.id = id;
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default Item;