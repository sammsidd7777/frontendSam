const toggleModals = async () => {
    await checkUserLogin();
    setIsModalOpen(!isModalOpen);
  };

  const toggleModalss = async () => {
    await checkUserLogin();
    setsiModalOpen(!siModalOpen);
  };

  const logout = async () => {
    HandleLogout();
    checkUserLogin();
  };

  const toggleCartOpen = async () => {
    setIsCartOpen(!isCartOpen);
    await getCartItems();
  };



  const toggleAlertTemporarily = () => {
    setIsAutocatAlertVisible(true);
    setTimeout(() => setIsAutocatAlertVisible(false), 2000);
  };