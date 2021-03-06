if (newPerson) {
      try {
        const newDokan = await Dokan.createDokan(dokanName);
        if (newDokan) {
          newPerson.dokan.push(newDokan);
          await newPerson.save();
          try {
            const newUser = await User.addUser(
              email,
              password,
              Number(contact),
              status,
              newPerson._id
            );
            if (!newUser) res.status(400).send("User Not Found-400");
            const token = createJWT(newUser._id);
            //res.cookie("jwt", token, cookieRule(2));
            res.status(200).json({
              userId: newUser._id,
              userName: newPerson.firstName,
              tokenId: token,
            });
            console.log("RESPOND SENT");
          } catch (error) {
            throw Error(error);
          }
        }
      } catch (error) {
        throw Error(error);
      }
    }



     try {
    const user = await User.login(email, password);
    if (user) {
      // Create JWT token
      const token = createJWT(user._id);

      // set cookie
      res.cookie("jwt", token, cookieRule(2));
      // send id , name
      res
        .status(200)
        .json({ message: "User Found and Logind in", user: user.personid });
    }
  } catch (err) {
    console.log(err);
    const errors = errorHandler(err);
    console.log(errors);
    res.status(400).json({ errors });
  }