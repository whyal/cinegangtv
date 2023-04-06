const Contact = () => {
  return (
    <div>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" class="rounded py-4 text-xl" />
        <label for="name">Name:</label>
        <input type="text" id="name" class="rounded py-4 text-xl" />
      </form>
    </div>
  );
};

export default Contact;
