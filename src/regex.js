const handleChange = (e, setFormData, error, formData) => {
  if (e.target.name === "goal" || e.target.name === "amount") {
    const re = /^[0-9\b]+$/;
    return e.target.value === "" || re.test(e.target.value)
      ? setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      : null;
  }

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

export default handleChange;
