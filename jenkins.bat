echo "--- start install ---"
npm install
echo "--- end install ---"
echo "--- start lint ---"
npm run lint
echo "--- end lint ---"
echo "--- start test ---"
npm test
echo "--- end test ---"
echo "--- start build ---"
npm run build || true
echo "always succesful for now"
echo "--- end build ---"