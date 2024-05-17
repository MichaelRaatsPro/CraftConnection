import React from 'react'

const page = () => {
  return (
    <div style = {{display: 'flex', justifyContent: 'center' }} >
      <div class="formContainer" style = {{border: "solid black 3px", width: "20vw"}}>
        <form>
            <div class="formGroup">
                <label for="fileUpload">Upload a file:</label>
                <input type="file" id="fileUpload" name="fileUpload"/>
            </div>
            <div class="formGroup">
                <label for="caption">Caption:</label>
                <input type="text" id="caption" name="caption" placeholder="Enter a caption"/>
            </div>
            <button type="submit">Upload</button>
        </form>
    </div>
    </div>
  )
}

export default page