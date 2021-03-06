describe('Login Setup',function(){
    it('Seed phrase is not of 12 words', function(){
        assert.equal(-3,loginSetup('demand book maid age pen boring cluster city expect about habit skull chunk interest','testing','testing'));
    });
    it('New Password field is Empty', function(){
        assert.equal(-2,loginSetup('demand book maid age pen boring cluster city expect about habit skull','','testing'));
    });
    it('Confirm Password not equal to New Password', function(){
        assert.equal(-1,loginSetup('demand book maid age pen boring cluster city expect about habit skull','testing','test'));
    });
});

describe('LoginAuthentication',function(){
    it('should return -1 when password is invalid', function(){
        assert.equal(-1,loginAuthVerify('test','dc724af18fbdd4e59189f5fe768a5f8311527050'));
    });
    it('should return 0 when password is valid', function(){
        assert.equal(0,loginAuthVerify('testing','dc724af18fbdd4e59189f5fe768a5f8311527050'));
    });
});

describe('Import Account',function(){
    it('should return -1 on import account failure', function(){
        assert.equal(-1,importDBAccount('TestAccount','05ab75e592752af0df5bc92c94ca8ce55d4da5ffbe0a9110ddef1fc',1));
    });
    it('should return 0 on import account success', function(){
        assert.equal(0,importDBAccount('TestAccount','05ab75e592752af0df5bc92c94ca8ce55d4da5ffbe0a9110ddef1fcb3ac2f8db',1));
    });
});

describe('Create Initial Account',function(){
    it('should return Address on create initial account Success', function(){
        assert.notEqual(-1,createInitialAccount(extLoginKey,1));
    });
});

describe('Create Account',function(){
    it('should return Address on create account Success', function(){
        assert.notEqual(-1,createDBAccount('Test',1));
    });
});

createDBAccount('Test2',1);

describe('Delete Account',function(){
    it('should return -1 if deleted index is not found', function(){
        assert.equal(-1,deleteDBAccount(-1,1));
    });
    it('should return 0 if index to be deleted is Found', function(){
        assert.equal(0,deleteDBAccount(0,1));
    });
});

//console.log(extAccountData);

describe('Load Home Screen Data', () => {
  it('should return 0 if all components on the screen are loaded', async () => {
    const p = await loadingAccountDetails(0,1)
    expect(p).to.equal(0);
  });
  
  it('should return -1 if account address is invalid', async () => {
    const p = await loadingAccountDetails(5,1)
    expect(p).to.equal(-1);
  });
  
});

let transaction = laksa.transactions.new({
     version: 0, 
     toAddr: '2105d34aa4cbc67b40e649d4aad7d237d717668c', 
     amount: new laksa.util.toBN(100), 
     gasPrice: new laksa.util.toBN(100), 
     gasLimit: laksa.util.Long.fromNumber(100) 
});


describe('Send Transaction Zil', () => {
  //Use private key with atleast 300 Zil any balance
  it('should return 0 if transaction is successful.', async () => {
    let account_1 = laksa.wallet.importAccountFromPrivateKey('05ab75e592752af0df5bc92c94ca8ce55d4da5ffbe0a9110ddef1fcb3ac2f8db');
    const a1 = await account_1.signTransaction(transaction).then(signed => signed.sendTransaction()).then(return 0;).catch(return -1;);
    expect(a1).to.equal(0);
  });
  
  it('should return -1 if transaction failed', async () => {
    //Use private key without any balance
    let account_2 = laksa.wallet.importAccountFromPrivateKey('ee70f971dee477eeb7342e1d4654f7fbec2bd1b42ad4065a3a9aada96ece1f18');
    const a2 = await account_2.signTransaction(transaction).then(signed => signed.sendTransaction()).then(return 0;).catch(return -1;);
    expect(a2).to.equal(-1);
  });
  
});


describe('Get Balance', () => {
  it('should return 0 if all components on the screen are loaded', async () => {
    const p = await laksa.zil.getBalance({ address: 'a74f3660086f2ab75e7ef94161321666e26d09c2' })
    expect(p.balance).to.equal('0');
  });
});







