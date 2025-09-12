import React from 'react';

const styles = {
    wrapper: {
        margine: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    imageContainer:{},
    images:{    
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        margineLeft:8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nextText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    commentText:{
        color: "blaek",
        fontSize: 16,
    },
};

function Comment(props) {

    return(
    <div style ={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.images}
                />
        </div>

        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span tyle={styles.commentText}>
                {props.comment}
            </span>
        </div>
    </div>    
    );
}

export default Comment;