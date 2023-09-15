import { storage } from "./firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

// The code below is an example of how we can use storage features from Firebase storage:
// Create a storage reference from Firebase storage service
const storageRef = ref(storage);
// console.log("storageRef: ", storageRef);

// get img ref from Firebase storage
const spaceRef = ref(storage, "chocoMousseImg.png");
// console.log("spaceRef: ", spaceRef);

// get img URL from Firebase
getDownloadURL(spaceRef).then((url) => {
  console.log("url: ", url);
});
