<form method="POST" action="/account">
    @csrf
    <div class="form-group">
        <label class="form-label" for="form-accout-name">
            家計簿に名前をつけましょう！
        </label>
        <input name="title" placeholder="○○の家計簿" required="" type="text" id="form-accout-name" class="mb-2 form-control">
        <small class="text-muted mb-2 form-text">
        </small>
    </div>
    <div class="form-group">
        <div class="form-check">
            <input name="isPublic" type="checkbox" id="form-accout-isPublic" class="form-check-input" checked disabled>
            <label title="" type="checkbox" for="form-accout-isPublic" class="form-check-label">
                家計簿を共有する
            </label>
        </div>
    </div>
    <div class="alert alert-warning p-2" role="alert">
        <ul class="pl-4">
            <li>
                <small>ログインせずに利用するため、一部機能が制限されます。</small>
            </li>
            <li>
                <small>ログインせずに利用する場合は常に共有設定となり、URL を知っている人であれば誰でもアクセスができる状態となります。</small>
            </li>
        </ul>
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary">作成</button>
    </div>
</form>
