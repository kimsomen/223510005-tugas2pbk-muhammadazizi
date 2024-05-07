<template>
  <div id="app">
    <div class="container" :style="{ backgroundColor: backgroundColor, }">
      <h1>New User</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Your Name:</label>
          <input type="text" id="name" :class="{ 'error': !formData.name }" :style="{ border: formData.name ? '1px solid #ccc' : '1px solid red' }" v-model="formData.name" required>
          <span class="error-message" v-if="!formData.name">*Please enter your name!</span>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label :style="{ color: textColor }" for="message">Send Message:</label>
          <textarea id="message" v-model="formData.message" @input="updateDisplay" required></textarea>
        </div>
        <div class="modal" v-if="showPopup" @click="closePopup">
          <div class="modal-content" @click.stop>
            <span class="close" @click="closePopup">&times;</span>
            <h2>Entered Text</h2>
            <table>
              <tr>
                <td>{{ formData.message }}</td>
              </tr>
            </table>
          </div>
        </div>                    
        <div class="form-group">
          <label for="color" :style="{ color: textColor }">Change Background Color:</label>
          <input type="color" id="color" v-model="backgroundColor">
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="modal" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <h2>Form Submission</h2>
        <table>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{{ formData.name }}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{{ formData.email }}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>{{ formData.message }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      backgroundColor: '#ffd1',
      textColor: '#333',
      showModal: false,
      showPopup: false
    }
  },
  methods: {
    submitForm() {
      this.showModal = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    resetForm() {
      for (let key in this.formData) {
        this.formData[key] = '';
      }
    },
    updateDisplay() {
      this.showPopup = true;
    }
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}



.container {
  text-align: center;
  background-color: #fff;
  padding: 100px;
  border-radius: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: auto;
  margin-top: 5rem;
}

h1 {
  color: #333;
  margin-bottom: 20px; 
  margin-top: -40px; 
  font-size: 50px;
}

form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-size: 25px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 25px;
}

button:hover {
  background-color: #555;
}

.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  max-width: 600px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #333;
}
</style>
