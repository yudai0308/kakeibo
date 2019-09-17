@extends('layouts.app')

@section('content')
<div id="mypage"></div>
<!-- <form method="post" action="/account">
    @csrf
    <div class="form-group">
        <label class="form-label" for="form-accout-name">家計簿に名前をつけましょう！</label>
        <input name="title" placeholder="○○の家計簿" required="" type="text" id="form-accout-name" class="mb-2 form-control">
        <small class="text-muted mb-2 form-text">
            家計簿は個人用だけでなく、複数人でシェアしながらご利用できます。<br>
            最大３つまで作成することができますので、区別できるように名前をつけてください。
        </small>
    </div>
    <div class="form-group">
        <div class="form-check">
            <input value="1" name="isPublic" type="checkbox" id="form-accout-isPublic" class="form-check-input">
            <label title="" type="checkbox" for="form-accout-isPublic" class="form-check-label">
                家計簿を共有する
            </label>
        </div>
        <small class="text-muted mb-2 form-text">
            家計簿はを共有したい場合はチェックしてください。
        </small>
    </div>
    <div class="text-right"><button type="submit" class="btn btn-primary">作成</button></div>
</form> -->
@endsection
